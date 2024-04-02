import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program_1.jpeg'
import program_2 from '../../assets/program_2.jpeg'
import program_3 from '../../assets/program_3.jpeg'
const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <a href='https://www.adidas.co.in/samba-og-shoes/B75806.html?cm_mmc=AdieSEM_Google_PLA-_-PerformanceMax-Multiple-_--_--_-dv%3AeCom-_-cn%3APerformanceMax-Multiple-_-pc%3AGoogle_PLA&cm_mmc1=IN&cm_mmc2=PLA-Multiple-PerformanceMax-Multiple-Multiple-IN-EMEA-eCom-Paid_Search&gad_source=1&gclid=CjwKCAjwtqmwBhBVEiwAL-WAYbAzcY5UAlm1sdkEa8O7rTxcdNg6XtxlBZFjq-1QWXXr8U3qAobb2RoCzIUQAvD_BwE'><img src={program_1} alt="" /></a>
            <div className='caption'>
                ADDIDAS SAMBA
            </div>
        </div>
        <div className='program'>
            <a href='https://www.nike.com/in/t/cortez-shoes-tDJ6fc/HF6410-101'><img src={program_2} alt="" /></a>
            <div className='caption'>
                NIKE CORTEZ
            </div>
        </div>
        <div className='program'>
            <a href='https://in.puma.com/in/en/pd/duke-mens-sneakers/388892?size=0280&swatch=03&utm_medium=DSP&utm_source=GGL-DDA&utm_aud=MULT&utm_obj=TRA&utm_campaign=PMAX_GGL_IN_DSP_GGL_DDA_MULT_TRA_PerformanceMax_Discounted_agency_1000067495857508873&gad_source=1&gclid=CjwKCAjwtqmwBhBVEiwAL-WAYdp6OpTWRu6e38xSn8V-h1-rfg97IYvNfi1a2COyfzvrzzMxDHBRMBoCKD0QAvD_BwE'><img src={program_3} alt="" /></a>
            <div className='caption'>
                PUMA DUKE
            </div>
        </div>    
       
    </div>
  )
}

export default Programs