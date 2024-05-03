import Link from 'next/link';

const Brand = () => (
  <Link href='/'>
    <div className='flex items-center gap-1'>
      <img
        src='/blinder.svg'
        width={120}
        height={50}
        alt='Blinder logo'
        className='w-[30px]'
      />
      <h3 className='text-gray-700 text-[20px] font-mono'>JD</h3>
    </div>
  </Link>
);
export default Brand;
