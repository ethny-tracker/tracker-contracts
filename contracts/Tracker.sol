pragma solidity >=0.4.21 <0.6.0;

contract Tracker {
  event FileMetadataAdded(address indexed creator, bytes32 ipfsHash);

  struct FileMetadata {
    bytes32 ipfsHash;
    address creator;
    uint256 timestamp;
  }

  FileMetadata[] public fileMetadatas;
  int public numFileMetadata;

  /// Add a file with the given IPFS metadata hash.
  /// Hash is expected to be a sha256 multihash with the 2 byte prefix removed, i.e. a simple sha256 hash
  function addFile(bytes32 ipfsHash) public {
    fileMetadatas.push(FileMetadata({
      ipfsHash : ipfsHash,
      creator : msg.sender,
      timestamp : block.timestamp
      }));

    numFileMetadata ++;

    emit FileMetadataAdded(msg.sender, ipfsHash);
  }
}
