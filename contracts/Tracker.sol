pragma solidity >=0.4.21 <0.6.0;
pragma experimental ABIEncoderV2;

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

  /// Return the file metadata for a particular range
  function getRange(uint256 limit, uint256 offset) public view returns (FileMetadata[] memory) {
    FileMetadata[] memory metadata = new FileMetadata[](limit);

    uint256 setIndex = 0;
    for (uint256 ix = offset; ix < limit + offset; ix ++) {
      metadata[setIndex++] = allFileMetadata[ix];
    }

    return metadata;
  }

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
