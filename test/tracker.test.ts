import { TrackerContract, TrackerInstance } from '../build/types/truffle';

const Tracker = artifacts.require('Tracker');

contract('TrackerContract', ([ deployer ]) => {
  let tracker: TrackerInstance;

  beforeEach('deploy a tracker', async () => {
    tracker = await Tracker.new({from: deployer});
  });

  describe('addFile', () => {
    it('emits a log', async () => {
      const tx = await tracker.addFile('0xabc', {from: deployer});

      expect(tx.logs).to.be.an('array').with.length(1);
      expect(tx.logs[ 0 ].args.ipfsHash).to.eq('0x0abc000000000000000000000000000000000000000000000000000000000000');
      expect(tx.logs[ 0 ].args.creator).to.eq(deployer);
      expect(tx.logs[ 0 ].args.index.toNumber()).to.eq(0);
      expect(tx.logs[ 0 ].args.timestamp.toNumber()).to.not.eq(0);
    });

    it('adds it to the all file metadata', async () => {
      const {logs} = await tracker.addFile('0xabc', {from: deployer});

      const struct = await tracker.allFileMetadata(logs[ 0 ].args.index);

      expect(struct[ 0 ]).to.eq('0x0abc000000000000000000000000000000000000000000000000000000000000');
      expect(struct[ 1 ]).to.eq(deployer);
    });
  });

  describe('getRange', async () => {
    before(async () => {
      for (let i = 0; i < 3; i++) {
        await tracker.addFile(`0x${i}`, {from: deployer});
      }
    });

    it('works if the range exceeds the total', async () => {
      const range = await tracker.getRange(4, 1);
      expect(range).to.be.an('array').with.length(2);
    });

    it('returns a range of metadata', async () => {
      const range = await tracker.getRange(2, 1);
      expect(range).to.be.an('array').with.length(2);
      expect(range[ 0 ].ipfsHash.startsWith('0x1'));
      expect(range[ 1 ].ipfsHash.startsWith('0x2'));
    });
  });

  describe('allFileMetadata', async () => {
    let index: number;
    beforeEach(async () => {
      index = (await tracker.addFile('0xabc', {from: deployer})).logs[ 0 ].args.index.toNumber();
    });

    it('returns the file metadata', async () => {
      const [ ipfsHash, address, timestamp ] = await tracker.allFileMetadata(index);

      expect(ipfsHash).to.eq('0x0abc000000000000000000000000000000000000000000000000000000000000');
      expect(address).to.eq(deployer);
      expect(timestamp.toNumber()).to.not.eq(0);
    });
  });

});