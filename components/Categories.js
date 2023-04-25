import CategoryItem from "./CategoryItem";
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';

const CATEGORIES = [
    {
        text: "Development & IT",
        svg: <TerminalOutlinedIcon className='h-8 w-8 mr-2' />
    },
    {
        text: "Design & Creative",
        svg: <DesignServicesOutlinedIcon className='h-8 w-8 mr-2' />
    },
    {
        text: "Sales & Marketing",
        svg: <ShowChartOutlinedIcon className='h-8 w-8 mr-2' />
    },
    {
        text: "Writing & Translation",
        svg: <ModeEditOutlineOutlinedIcon className='h-8 w-8 mr-2' />
    },
    {
        text: "Admin & Customer Suppprt",
        svg: <SupportAgentOutlinedIcon className='h-8 w-8 mr-2' />
    },
    {
        text: "Finance & Accounting",
        svg: <PriceChangeOutlinedIcon className='h-8 w-8 mr-2' />
    },
    {
        text: "Engineering & Architecture",
        svg: <ConstructionOutlinedIcon className='h-8 w-8 mr-2' />
    },
    {
        text: "Legal",
        svg: <BalanceOutlinedIcon className='h-8 w-8 mr-2' />
    }
]

function Categories() {
  return (
    <div className='grid mt-5 grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:justify-center max-w-[1000px] mx-auto'>
        {
            CATEGORIES.map((category) => {
                return (
                    <CategoryItem category={category.text} svg={category.svg} />
                )
            })
        }
    </div>
  )
}

export default Categories;