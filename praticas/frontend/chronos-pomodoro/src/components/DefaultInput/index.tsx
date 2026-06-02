

// O nosso tipo terá:
// 1. A nossa prop customizada "id" (forçando ela a ser obrigatória como string)
// & (E)
// 2. Todas as props que um <input> normal já aceita (type, placeholder, onChange...)
type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>


export function DefaultInput({id, type}: DefaultInputProps) {
  return (
    <>
    <label htmlFor={id}>task</label>
    <input id={id} type={type}/>
    </>
  );
}