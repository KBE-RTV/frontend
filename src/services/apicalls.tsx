export const getProducts = async () => {
    const response = await fetch('http://localhost:8086/convertcurrencies', {
        method: 'GET',
      })
    return await response.json();
}
