interface SearchSectionProps {
    onSearchChange: (query: string) => void; 
    searchTerm?: string; // opcional, se você quiser controlar o termo de busca externamente
}

export default function SearchSection({ onSearchChange }: SearchSectionProps) {
    return (
        <section className="bg-white py-6 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">    
                <div className="flex justify-center">
                    <input
                        type="text"
                        placeholder="Buscar por título de curso..."
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="text-neutral-950 w-full md:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />  
                </div>
            </div>
        </section>
    );
}