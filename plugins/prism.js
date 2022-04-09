import Prism from "prismjs";

// Include the toolbar plugin: (optional)
import "prismjs/plugins/toolbar/prism-toolbar";

// Include the line numbers plugin: (optional)
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

// Include the line highlight plugin: (optional)
import "prismjs/plugins/line-highlight/prism-line-highlight";
import "prismjs/plugins/line-highlight/prism-line-highlight.css";

// Include some other plugins: (optional)
// import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
// import "prismjs/plugins/show-language/prism-show-language";
//import "prismjs/plugins/highlight-keywords/prism-highlight-keywords";

// Include additional languages
import "prismjs/components/prism-bash.js";

// Set vue SFC to markdown
Prism.languages.vue = Prism.languages.markup;

export default Prism;
