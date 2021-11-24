import * as S from './styled'

export const TableArea = () => {
  return(
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

      </tbody>
    </S.Table>
  );
}