export const IO = (item: Element, options: IntersectionObserverInit | undefined) => {
   return new Promise<void>(resolve => {
      const observer = new IntersectionObserver(entries => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               resolve();
            }
         });
      }, options);

      // Start observing the target element
      observer.observe(item);
   });
};

 export function AppendSpanElement(lines: any) {
     lines.forEach((element: { words: HTMLElement[]; el: HTMLElement }) => {
        const wrappedLines = element.words
           .map(
              (wordsArr: HTMLElement) => `
                              <span class="word_wrap">
                                    ${wordsArr.outerHTML}
                               </span>`
           )
           .join("");
        element.el.innerHTML = wrappedLines;
     });
  }
