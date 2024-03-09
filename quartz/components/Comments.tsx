import { QuartzComponentConstructor } from "./types"

export default (() => {
  function Footer() {
    return (
        <script src="https://giscus.app/client.js"
                data-repo="thienqc/our-notes"
                data-repo-id="R_kgDOLdyGXg"
                data-category="General"
                data-category-id="DIC_kwDOLdyGXs4Cd1nd"
                data-mapping="title"
                data-strict="0"
                data-reactions-enabled="1"
                data-emit-metadata="0"
                data-input-position="top"
                data-theme="noborder_gray"
                data-lang="vi"
                data-loading="lazy"
                crossorigin="anonymous"
                async>
        </script>
    )
  }

  return Footer
}) satisfies QuartzComponentConstructor


