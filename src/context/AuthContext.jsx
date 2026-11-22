import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const AuthContext = createContext(null)

const MOCK_USERS_KEY = 'barqueada_users'
const CURRENT_USER_KEY = 'barqueada_current_user'
const USER_ORDERS_KEY = 'barqueada_user_orders'

const initializeMockData = () => {
    if (!localStorage.getItem(MOCK_USERS_KEY)) {
        localStorage.setItem(MOCK_USERS_KEY, JSON.stringify({}))
    }
    if(!localStorage.getItem(USER_ORDERS_KEY)) {
        localStorage.setItem(USER_ORDERS_KEY, JSON.stringify({}))
    }
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
}
    useEffect(() => {
        initializeMockData()
        const savedUser = localStorage.getItem
        (CURRENT_USER_KEY)
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser))
            } catch {
                localStorage.removeItem(CURRENT_USER_KEY)
            }
        }
        setLoading(false)
    }, [])


    //formato do telefone para o armazenamento (remover formatacao)
    const formatPhoneForStorage = (phone) => {
        return phone.replace(/\D/g, '')
    }

    //formato do telefone para o display
    const formatPhoneForDisplay = (phone) => {
        const cleaned = phone.replace(/\D/g, '')
        if (cleaned.length === 11) {
            return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`
        }
        if (cleaned.length === 10) {
            return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`
        }
        return phone
    }

    //validar se o numero e brasileiro
    const validatePhonne = (phone) => {
        const cleaned = phone.replace(/\D/g, '')
        return cleaned.length === 10 || cleaned.length === 11
    }

    //registrar novo usuario
    const register = useCallback(async (phone, name = '') => {
        setError(null)

        if (!validatePhonne(phone)) {
            setError('Número de telefone inválido. Use o formato (DD) XXXXX-XXXX')
            return { sucess: false, error: 'Invalid phone' }
        }

        const formattedPhone = formatPhoneForStorage(phone)
        const users = JSON.parse(localStorage.getItem(MOCK_USERS_KEY) || '{}')

        if (users[formattedPhone]) {
            setError('Este telefone já está cadastrado. Faça login.')
            return { sucess: false, error:'Phone exists' }
        }

        const newUser = {
            phone: formattedPhone,
            name: name || `Usuário ${formattedPhone.slice(-4)}`,
            createdAt: new Date().toISOString(),
            loyaltyPoints: 0,
            TotalOrders:0,
            TotalSpent:0,
        }

        users[formattedPhone] = newUser
        localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(users))
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser))
        setUser(newUser)

        return { sucess: true, user: newUser }
    }, [])

    //login do usuario
    const login = useCallback(async (phone) => {
        setError(null)
        
        if (!validatePhonne(phone)) {
            setError('Número de telefone inválido. Use o formato (DD) XXXXX-XXXX')
            return { sucess: false, error: 'Invalid phone' }
        }

        const formattedPhone = formatPhoneForStorage(phone)
        const users = JSON.parse(localStorage.getItem(MOCK_USERS_KEY)) || '{}'

        if (!users[formattedPhone]) {
            setError('Telefone não encontrado. Crie sua conta primeiro.')
            return { sucess: false, error: 'Not found' }
        }

        const foundUser = users[formattedPhone]
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(foundUser))
        setUser(foundUser)

        return { sucess: true, user: foundUser }
    }, [])

    //logado
    const logout = useCallback(() => {
        localStorage.removeItem(CURRENT_USER_KEY)
        setUser(null)
    }, [])

    //atualizar perfil do usuario
    const updateProfile = useCallback((updates) => {
        if (!user) return { sucess: false, error: 'Not logged in' }

        const formattedPhone = formatPhoneForStorage(user.phone)
        const users = JSON.parse(localStorage.getItem(MOCK_USERS_KEY) || '{}')

        const updateUser = { ...user, ...updates }
        users[formattedPhone] = updateUser
        localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(users))
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(updateUser))
        setUser(updateUser)

        return { sucess: true, user: updateUser }
    }, [user])