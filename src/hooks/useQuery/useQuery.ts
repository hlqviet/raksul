import { useEffect, useState } from 'react'

import { API_HOST } from '../../common/constants'
import { Resource, ResourceAction } from '../../common/enums'

interface UseQueryProps {
  action: ResourceAction
  resource: Resource
  query?: Record<string, string>
}

const useQuery = <T extends any>(props: UseQueryProps) => {
  const { action, resource, query } = props
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | undefined>()
  const [data, setData] = useState<T>()

  useEffect(() => {
    const queryParams = new URLSearchParams()

    if (query) {
      for (const [key, value] of Object.entries(query)) {
        queryParams.set(key, value)
      }
    }

    setLoading(true)
    ;(async () => {
      try {
        const response = await fetch(
          `${API_HOST}/${resource}${query ? `?${queryParams.toString()}` : ''}`,
          {
            method: action
          }
        )

        if (!response.ok) {
          setError(
            new Error(`HTTP error: ${response.status} ${response.statusText}`)
          )
        }

        setData(await response.json())
        setError(undefined)
      } catch (err) {
        setError(error)
        setData(undefined)
      } finally {
        setLoading(false)
      }
    })()
  }, [action, error, query, resource])

  return { loading, error, data }
}

export default useQuery
