
const NFTLoading = () => {

  return (
    <div className="flex flex-col items-center mt-32 h-full">
      <span className="text-center mb-12">NFT 계약서 생성 중<br />
        <span className="text-gray-500 text-sm">
          잠시만 기다려 주세요!
        </span>
      </span>
      <img className="w-[150px] h-[150px]" src="/gifs/nft.gif" alt="nft gif" />
      <img className="w-[100px]" src="/gifs/upload.gif" alt="upload gif" />

    </div>
  )
}

export default NFTLoading;