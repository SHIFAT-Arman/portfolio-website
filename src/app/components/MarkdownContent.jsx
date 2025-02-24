import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/monokai.css';

export default function MarkdownContent({ content }) {
  // Remove backslash escapes for backticks
  const cleanedContent = content.replace(/\\`/g, '`');
  return (
    <div className="prose prose-invert">

      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]} components={{
        pre: ({ node, ...props }) => (
          <pre className="border-none bg-transparent p-2 m-0" {...props} />
        ),
        code: ({ node, inline, ...props }) =>
          inline ? (
            <code {...props} />
          ) : (
            <code className="bg-gray-800 p-4 rounded block" {...props} />
          )
      }}>
        {cleanedContent}
      </ReactMarkdown>
    </div>
  );
}
