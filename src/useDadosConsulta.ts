const useDadosConsulta = () => {
    return useFetch<IConsulta[]>({url: 'consultas'});
}

export default useDadosConsulta;