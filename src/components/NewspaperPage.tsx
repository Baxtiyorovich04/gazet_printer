import './NewspaperLayout.css';

export default function NewspaperPage({ children }: { children: React.ReactNode }) {
    return <article className="newspaper">{children}</article>;
}
