function TimelineDivider() {
    return (
      <div className="flex gap-2.5 items-center px-2.5 w-[33px]">
        <div className="flex flex-col items-center self-stretch my-auto min-h-[672px] w-[15px]">
          <div className="flex w-1 border border-solid bg-stone-500 border-stone-500 min-h-[24px]" />
          <div className="flex mt-2 w-full bg-black rounded-full h-[15px] min-h-[15px]" />
          <div className="flex flex-1 mt-2 w-1 border border-solid bg-stone-500 border-stone-500 min-h-[617px]" />
        </div>
      </div>
    );
}
  

export default TimelineDivider