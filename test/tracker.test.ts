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
    });
  });

});