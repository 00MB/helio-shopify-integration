const GlobalServices = require("../src/services/global.services")
test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe(null);
});

// test('adds 1 + 2 to equal 3',async () => {
//     let resutl = await GlobalServices.createMetaMaskAccount({metaMask_address:'tesings'})
//     expect(3).toBe(3);
//   });