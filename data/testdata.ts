import { FileMetadata } from '@ethny-tracker/tracker-protos';

/// These are the file metadata we bootstrap the contract with.
const testData: { [ key: string ]: FileMetadata } = {
  centralized_vs_distributed: FileMetadata.create({
    category: 'Photos',
    title: 'Centralized vs. Decentralized vs. Distributed',
    description: 'Diagram that illustrates the difference between centralized, decentralized and distributed.',
    uri: 'ipfs://QmdhTuX4V4uAUKotFTFpeHDEkSDvWVGfsvqT5EwtmtnPUW'
  }),
  ten_commandments: FileMetadata.create({
    category: 'Videos',
    title: 'The Ten Commandments (1956) 1080p BrRip x264',
    description: '-------------------------------------------------------------------------------\n' +
      '\n' +
      '-------------------------------------------------------------------------------\n' +
      '\n' +
      '\n' +
      'Get all YIFYs newest releases first at  http://www.yify-torrents.org \n' +
      '\n' +
      'Also there you will find a list of upcoming uploads, instant chat, account registration and an effective movie search.\n' +
      '\n' +
      '\n' +
      '-------------------------------------------------------------------------------\n' +
      '\n' +
      '-------------------------------------------------------------------------------\t\n' +
      '\n' +
      '\n' +
      ' \n' +
      'http://www.imdb.com/title/tt0049833/\n' +
      '\n' +
      '\n' +
      'IMDB RATING: 7.8\n' +
      '\n' +
      'FORMAT.......................: MP4\n' +
      'CODEC........................: X264\n' +
      'GENRE........................: Adventure\n' +
      'FILE SIZE....................: 3.11 GB\n' +
      'RESOLUTION...................: 1920*1080\n' +
      'FRAME RATE...................: 23.976 fps\n' +
      'LANGUAGE.....................: English\n' +
      'SUBTITLES....................: English\n' +
      'RUNTIME......................: 220 mins\n' +
      '\n' +
      '\n' +
      '\n' +
      'To escape the edict of Egypt\'s Pharoah, Rameses I, condemning all newborn Hebrew males, the infant Moses is set adrift on the Nile in a reed basket. Saved by the pharaoh\'s daughter Bithiah, he is adopted by her and brought up in the court of her brother, Pharaoh Seti. Moses gains Seti\'s favor and the love of the throne princess Nefertiri, as well as the hatred of Seti\'s son, Rameses. When his Hebrew heritage is revealed, Moses is cast out of Egypt, and makes his way across the desert where he marries, has a son and is commanded by God to return to Egypt to free the Hebrews from slavery. In Egypt Moses\'s fiercest enemy proves to be not Rameses, but someone near to him who can \'harden his heart\'.\n' +
      '\n' +
      ' \n' +
      'http://cdn.piczend.com/images/ys0Qtjvk/qf3lhaffgbv6fmqshasu1baqt.png\n' +
      '\n' +
      ' \n' +
      'http://cdn.piczend.com/images/ys0Qtjvk/16dasnryh2fhyaozwk5zqn6rg.png\n' +
      '\n' +
      ' \n' +
      'http://cdn.piczend.com/images/ys0Qtjvk/qj7rzriwujo8acfsinrjrgv2b.png\n',
    uri: 'magnet:?xt=urn:btih:620d33eeb148c22b092ea99808d9f6878a2f3734&dn=The+Ten+Commandments+%281956%29+1080p+BrRip+x264+-+YIFY&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969'
  })
};

export default testData;