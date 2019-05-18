pragma solidity >=0.4.21 <0.6.0;

/// The tracker stores all the metadata hashes for the tracker.
contract Tracker {
  event FileMetadataAdded(address indexed creator, uint256 index, uint256 timestamp, bytes32 ipfsHash);

  struct FileMetadata {
    bytes32 ipfsHash;
    address creator;
    uint256 timestamp;
  }

  FileMetadata[] public allFileMetadata;
  uint256 public numFileMetadata;

  /// Add a file with the given IPFS metadata hash.
  /// Hash is expected to be a sha256 multihash with the 2 byte prefix removed, i.e. a simple sha256 hash
  function addFile(bytes32 ipfsHash) public {
    uint256 timestamp = block.timestamp;

    allFileMetadata.push(FileMetadata({
      ipfsHash : ipfsHash,
      creator : msg.sender,
      timestamp : timestamp
      }));

    emit FileMetadataAdded(msg.sender, numFileMetadata, timestamp, ipfsHash);

    numFileMetadata ++;
  }
}
