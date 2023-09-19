import { useMemo } from 'react'

import { PaperSize, Resource, ResourceAction } from '../../common/enums'
import { Price } from '../../models/price'
import useQuery from '../useQuery'

interface UseGetPricesQueryProps {
  paperSize?: PaperSize
}

type UseGetPricesQueryReturns = {
  paper_size: PaperSize
  prices: [Price[]]
}

const useGetPricesQuery = (props: UseGetPricesQueryProps = {}) => {
  const { paperSize = PaperSize.A4 } = props

  const query = useMemo(() => ({ paper_size: paperSize }), [paperSize])

  const { loading, error, data } = useQuery<UseGetPricesQueryReturns>({
    action: ResourceAction.Get,
    resource: Resource.Price,
    query
  })

  return { loading, error, data }
}

export default useGetPricesQuery
