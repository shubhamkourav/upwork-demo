
function CategoryItem({ category, svg }) {
  return (
    <div className='rounded-xl text-md cursor-pointer hover:bg-[#d5e0d5] transition duration-200 flex flex-col sm:flex-row justify-center
        items-center text-center bg-[#f2f7f2] h-[105px] sm:h-[50px] sm:rounded-full p-4'
    >
        {svg}{category}
    </div>
  )
}

export default CategoryItem;