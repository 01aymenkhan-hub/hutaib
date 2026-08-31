import SearchData from '../../../components/SearchData';

export const metadata = {
  title: 'Search Products | Hutaib Industrial Solutions',
  description: 'Search industrial chemicals, construction chemicals, and textile chemicals across Hutaib Industrial Solutions product line.',
  robots: 'noindex, follow',
};

export default function ProductSearchPage() {
  return (
    <div className="searchpage">
      <SearchData />
    </div>
  );
}
