import { TrackerContract, TrackerInstance } from '../build/types/truffle-contracts';

const Tracker = artifacts.require('Tracker');

contract('TrackerContract', ([ deployer, ac1, ac2 ]) => {
  let tracker: TrackerInstance;

  beforeEach('deploy a tracker', async () => {
    tracker = await Tracker.new({from: deployer});
  });

  describe('addFile', () => {
    it('emits a log', async () => {
      const tx = await tracker.addFile('0xabc', {from: ac1});

      expect(tx.logs).to.be.an('array').with.length(1);
      expect(tx.logs[ 0 ].args.ipfsHash).to.eq('0x0abc000000000000000000000000000000000000000000000000000000000000');
      expect(tx.logs[ 0 ].args.creator).to.eq(ac1);
      expect(tx.logs[ 0 ].args.index.toNumber()).to.eq(0);
      expect(tx.logs[ 0 ].args.timestamp.toNumber()).to.not.eq(0);
    });

    it('adds it to the list', async () => {
      const {logs} = await tracker.addFile('0xabc', {from: ac1});

      const struct = await tracker.allFileMetadata(logs[ 0 ].args.index);

      expect(struct[ 0 ]).to.eq('0x0abc000000000000000000000000000000000000000000000000000000000000');
      expect(struct[ 1 ]).to.eq(ac1);
    });

  });

  describe('allFileMetadata', async () => {
    let index;
    beforeEach(async () => {
      index = (await tracker.addFile('0xabc', {from: ac1})).logs[ 0 ].args.index;
    });
  });

});