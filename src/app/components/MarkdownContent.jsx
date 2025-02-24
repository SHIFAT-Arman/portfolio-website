import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';

export default function MarkdownContent({ content }) {
  // Remove backslash escapes for backticks
  const cleanedContent = content.replace(/\\`/g, '`');
  return (
    <div className="prose prose-invert">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
        {cleanedContent}
      </ReactMarkdown>
    </div>
  );
}
