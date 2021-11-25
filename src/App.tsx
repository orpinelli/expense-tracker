import * as S from './App.styled'
import { category } from './types/Category'
import { Item } from './types/Item'
import { categories } from './Data/categories'
import { Items } from './Data/Items'
import { useEffect, useState } from 'react'
import { getCurrentMonth, FilterListByMonth } from './helpers/dataFilter'
import { TableArea } from './components/TableArea'

const App = () => {
  const [list, setList] = useState(Items)
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [filterList, setFilterList] = useState<Item[]>([])

  useEffect(() => {
    setFilterList(FilterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  return (
    <S.Container>
      <S.Header>
        <S.HeaderText> Sistema Financeiro </S.HeaderText>
      </S.Header>
      <S.Body>
        <TableArea list={filterList} />
      </S.Body>
    </S.Container>
  )
}

export default App
