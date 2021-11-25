import * as S from './styled'
import { Item } from '../../types/Item'

type Props = {
  list: Item[]
}

export const TableArea = ({ list }: Props) => {
  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeadColumn width={100}>Data</S.TableHeadColumn>
          <S.TableHeadColumn width={130}>Categoria</S.TableHeadColumn>
          <S.TableHeadColumn>Titulo</S.TableHeadColumn>
          <S.TableHeadColumn width={150}>Valor</S.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <tr key={index}>
            <td></td>
            <td></td>
            <td>{item.title}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </S.Table>
  )
}
