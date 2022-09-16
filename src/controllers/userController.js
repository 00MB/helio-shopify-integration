const GlobalServices = require("../services/index")
// *************************************************************************
module.exports = {
  getMetaMaskAccount: async (req, res) => {
    let account = req.body.metaMask_address;
    let metaMask_address = account.toLowerCase();
    let email = req.body.email;
    if (metaMask_address) {
      let metaMaskAccount = await GlobalServices.metaMask.findOrCreateMetaMaskAccount(metaMask_address, email);//metaMask address
      let adminSettings = await GlobalServices.admin.getAdminSettings();
      let userCanMint = await GlobalServices.global.userCanMint(adminSettings.minting_time, metaMask_address,req.body.utc_time)
      if (metaMaskAccount._id) {
        
        return res.status(200).json({
          error: false,
          msg: 'Account details',
          data: metaMaskAccount,
          userCanMint,
          minting_euro_fee: adminSettings.minting_euro_fee,
          max_mint_count: adminSettings.max_mint_count,
          minting_matic_fee: adminSettings.minting_matic_fee,
          drop_site_status: adminSettings.drop_site_status,
        });
      } else {
        return res.status(401).json({
          error: true,
          msg: 'No se han encontrado detalles de esta cuenta.',
          data: {},
        });
      }

    }
  },
  // **********************************************************************
}