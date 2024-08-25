import { cn } from '@/utils/twmerge';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { MdCall, MdDone } from "react-icons/md";

const TableHeader = ({ title, className, highlight }: {
  title: string,
  className?: string,
  highlight?: boolean
}) => {
  return (
    <th className={cn(
      "border border-gray-200 p-4 text-left font-medium text-gray-700 font-inter text-lg font-semibold",
      className,
      highlight ? 'bg-[#F2F6FC]' : 'bg-white'
    )}>
      {title}
    </th>
  );
};

const TableRow = ({ children }: {
  children: React.ReactNode
}) => {
  return <tr>{children}</tr>;
};

const TableCell = ({ content, highlight, children, tick, center }: {
  content?: ReactElement | string,
  highlight?: boolean,
  children?: React.ReactNode,
  tick?: boolean,
  center?: boolean
}) => {
  return (
    <td className={cn(
      "border border-gray-200 p-4 font-inter text-lg",
      highlight ? 'bg-[#F2F6FC]' : 'bg-white',
    )}>
      <div className={cn(
        "flex items-center h-full",
        tick && 'justify-center',
        center && 'justify-center',
      )}>
        {content || children}
        {tick && (
          <div className="flex justify-center items-center h-full">
            <MdDone className="text-green-500 text-3xl" />
          </div>
        )}
      </div>
    </td>
  );
};

const PricingTable = () => {


  return (
    <div className="overflow-x-auto container">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <TableHeader className=' lg:w-[25%] w-[20%]' highlight title="Features" />
            <TableHeader className=' w-[16%]' title="Silver" />
            <TableHeader className=' w-[16%]' highlight title="Gold" />
            <TableHeader className=' w-[16%]' title="Platinum" />
            <TableHeader className=' w-[16%]' highlight title="Diamond" />
            <TableHeader className=' w-[16%]' title="Enterprise" />
          </tr>
        </thead>
        <tbody>
          <TableRow>
            <TableCell highlight content='Number of keyphrases optimized' />
            <TableCell center content="Up to 200" />
            <TableCell center highlight content="Up to 300" />
            <TableCell center content="Up to 400" />
            <TableCell center highlight content="Up to 500" />
            <TableCell center content="Custom" />
          </TableRow>
          <TableRow>
            <TableCell highlight content='Pages Optimized' />
            <TableCell center content="Up to 100" />
            <TableCell center highlight content="Up to 150" />
            <TableCell center content="Up to 200" />
            <TableCell center highlight content="Up to 250" />
            <TableCell center content="Custom" />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Technical Website Analysis & Opportunity Report' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>


          <TableRow>
            <TableCell highlight content='Keyword research & selection' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Keyword mapping to target pages' />
            <TableCell center tick />
            <TableCell center highlight tick />
            <TableCell center tick />
            <TableCell center highlight tick />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Title Tags & Meta descriptions' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Robots.txt optimization' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='XML sitemap creation & submission' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Google Business Profile optimization (if needed)' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Information architecture audit' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Canonicalization analysis' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Initial external link analysis and disavow' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Link redirect audit' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Internal linking restructuring & optimization' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Duplicate content analysis' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Header Tags Optimized (Ex.H1s)' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Setup of website sitemap' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Image optimization' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Custom 404 error page setup and optimization' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Schema Implementation(JSON-LD)' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Google Analytics setup w/conversion tracking' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Google Analytics traffic analysis' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Initial visitor profile report' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Ongoing quarterly keyword ranking reporting' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Ongoing monthly traffic, goal & CPL reporting' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Ongoing user experience reporting (bounce rate, device category, etc.)' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Ongoing quarterly competitor conquest reports' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Keyword rank checker access with weekly updates (if requested)' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Ability to check location data accuracy across 40+ local directories' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='A/B Testing of SERP title & description to improve clickthrough' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Notification of new reviews (major review platforms)' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Analyze your leads to project the # of leads competitors receive on a monthly basis' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Predict your and your competitors’ market share on a monthly basis' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Competitor intelligence login to view competitor data' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Dedicated Internet Marketer' />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center tick />
            <TableCell center tick highlight />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Website conversion analysis implementation' />
            <TableCell center content='Custom' />
            <TableCell center highlight content='Custom' />
            <TableCell center content='Custom' />
            <TableCell center highlight content='Custom' />
            <TableCell center content='Custom' />
          </TableRow>

          <TableRow>
            <TableCell highlight content='Progressive monthly optimization:(6 month commitment – Subsequent 4 months)' />
            <TableCell center content='$2,500' />
            <TableCell center highlight content='$5,000' />
            <TableCell center content='$6,500' />
            <TableCell center highlight content='$8,000' />
            <TableCell center content={
              <>
                <Link className=' underline' href="#">
                  Get Quote
                </Link>
              </>
            } />
          </TableRow>

          <TableRow>
            <TableCell highlight content={
              <>
                <div>
                  <p className=' font-inter font-bold text-sm text-[#A9B4BC] m-0'>Need more information? Call Us:</p>
                  <div className=' h-fit flex items-center mt-2'>
                    <div className=' w-10 h-10 rounded-full bg-[#26B16D] p-1 flex justify-center items-center'>
                      <MdCall color='#fff' />
                    </div>
                    <Link className=' ml-4 font-inter font-bold text-lg text-[#26B16D]' href="tel:888-601-5359">888-601-5359</Link>
                  </div>
                </div>
              </>
            } />

            <TableCell center content={
              <>
                <button className=' bg-[#8C2CF4] rounded-sm uppercase text-white font-inter font-bold text-sm px-2 py-2 lg:text-lg lg:px-4 lg:py-7'>
                  Get <br /> Started
                </button>
              </>
            } />
            <TableCell center content={
              <>
                <button className=' bg-[#8C2CF4] rounded-sm uppercase text-white font-inter font-bold text-sm px-2 py-2 lg:text-lg lg:px-4 lg:py-7'>
                  Get <br /> Started
                </button>
              </>
            } />
            <TableCell center content={
              <>
                <button className=' bg-[#8C2CF4] rounded-sm uppercase text-white font-inter font-bold text-sm px-2 py-2 lg:text-lg lg:px-4 lg:py-7'>
                  Get <br /> Started
                </button>
              </>
            } />
            <TableCell center content={
              <>
                <button className=' bg-[#8C2CF4] rounded-sm uppercase text-white font-inter font-bold text-sm px-2 py-2 lg:text-lg lg:px-4 lg:py-7'>
                  Get <br /> Started
                </button>
              </>
            } />
            <TableCell center content={
              <>
                <button className=' bg-[#8C2CF4] rounded-sm uppercase text-white font-inter font-bold text-sm px-2 py-2 lg:text-lg lg:px-4 lg:py-7'>
                  Get <br /> Started
                </button>
              </>
            } />
          </TableRow>
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;

