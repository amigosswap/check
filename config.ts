// Types
type IConfig = {
  decimals: number;
  airdrop: Record<string, number>;
};

// Config from generator
const config: IConfig = {
  decimals: 18,
  airdrop: {
    "0xa6A855f607081D277B37329FA70b1f23c47A3299": 100,
    "0xD068f034DDD1b1e36aa1B4e5d5da3D2db42BF07c": 200,
    "0x0E24aef342F8b17898F8a06853daC07B114dfc7a": 300,
    "0x46EebC4c7e48291563D793aa2A3AD560b3852e93": 400,
    "0x12f4842A4FC15155DF2Ee921725c2c30d7692634": 500,
  },
};

// Export config
export default config;
