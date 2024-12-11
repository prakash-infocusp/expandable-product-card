export interface ProductData {
  id: number;
  title: string;
  description: string;
  info?: string;
  imageUrl: string;
}

export const fetchProductData = (): Promise<ProductData[]> => {
  return new Promise((resolve) => {
    setInterval(() => {
      resolve([
        {
          id: 1,
          title: "Beige-Me Up, Buttercup!",
          description:
            "Your Daily Dollop of Dazzlingly Delightful Neutral Chic.",
          info: "Welcome to the wonderful world of beige—where subtlety meets sass and neutral never means boring. Meet “Beige-Me Up, Buttercup,” a creamy complexion savior packaged in a warm, welcoming shade that’s guaranteed to make your routine feel as smooth as a spoonful of caramel mousse. Spread it on with glee, knowing you’re delivering a glow that whispers, “I’m effortless” while winking mischievously at the mirror. It’s time to embrace the hue that never tries too hard, because sometimes being gorgeously, gloriously beige is the most enchanting statement of all.",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/b8be/df1d/78873f68b224e62bcefb43f2d1d2d72f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=leROmd1RGAhOejFp8mf77JIjfOYRUMYzYIGeE0YUs0fL1pRbJv-4DtKEq8qWeGUm5yLBBf3kdCMijrerx8BRe7AvBn-MhKrADHUBsXn57hHwvLT5sxN7C7pvvdEdnoaCu9jf~TjI4638g0xy80gyQed2qcxk4c9s0zIH3xubRcelEbbolwrNyXOxWxNy~mFKWmci7IbWwVTNbjlO7MKHju5Eu0SPhzXxvOpOG0-PgH9B2r0YilfozDmOwnEb1IwqrZ7XmVN2a5Z-P1~G8ey8oFcLTr19hbPpjRZO4pCmTqe~rWyqhuP1vkLaCSG3Rck~qnsBzwTd-jckvWHrUjVj0Q__",
        },
        {
          id: 2,
          title: "Tropical Delight",
          description: "The Best Summer Vibes In A Can.",
          info: "Welcome to the wonderful world of beige—where subtlety meets sass and neutral never means boring. Meet “Beige-Me Up, Buttercup,” a creamy complexion savior packaged in a warm, welcoming shade that’s guaranteed to make your routine feel as smooth as a spoonful of caramel mousse. Spread it on with glee, knowing you’re delivering a glow that whispers, “I’m effortless” while winking mischievously at the mirror. It’s time to embrace the hue that never tries too hard, because sometimes being gorgeously, gloriously beige is the most enchanting statement of all.",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/b8be/df1d/78873f68b224e62bcefb43f2d1d2d72f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=leROmd1RGAhOejFp8mf77JIjfOYRUMYzYIGeE0YUs0fL1pRbJv-4DtKEq8qWeGUm5yLBBf3kdCMijrerx8BRe7AvBn-MhKrADHUBsXn57hHwvLT5sxN7C7pvvdEdnoaCu9jf~TjI4638g0xy80gyQed2qcxk4c9s0zIH3xubRcelEbbolwrNyXOxWxNy~mFKWmci7IbWwVTNbjlO7MKHju5Eu0SPhzXxvOpOG0-PgH9B2r0YilfozDmOwnEb1IwqrZ7XmVN2a5Z-P1~G8ey8oFcLTr19hbPpjRZO4pCmTqe~rWyqhuP1vkLaCSG3Rck~qnsBzwTd-jckvWHrUjVj0Q__",
        },
        {
          id: 3,
          title: "Bold & Beautiful",
          description: "Statement Colors for Every Occasion.",
          info: "Welcome to the wonderful world of beige—where subtlety meets sass and neutral never means boring. Meet “Beige-Me Up, Buttercup,” a creamy complexion savior packaged in a warm, welcoming shade that’s guaranteed to make your routine feel as smooth as a spoonful of caramel mousse. Spread it on with glee, knowing you’re delivering a glow that whispers, “I’m effortless” while winking mischievously at the mirror. It’s time to embrace the hue that never tries too hard, because sometimes being gorgeously, gloriously beige is the most enchanting statement of all.",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/b8be/df1d/78873f68b224e62bcefb43f2d1d2d72f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=leROmd1RGAhOejFp8mf77JIjfOYRUMYzYIGeE0YUs0fL1pRbJv-4DtKEq8qWeGUm5yLBBf3kdCMijrerx8BRe7AvBn-MhKrADHUBsXn57hHwvLT5sxN7C7pvvdEdnoaCu9jf~TjI4638g0xy80gyQed2qcxk4c9s0zIH3xubRcelEbbolwrNyXOxWxNy~mFKWmci7IbWwVTNbjlO7MKHju5Eu0SPhzXxvOpOG0-PgH9B2r0YilfozDmOwnEb1IwqrZ7XmVN2a5Z-P1~G8ey8oFcLTr19hbPpjRZO4pCmTqe~rWyqhuP1vkLaCSG3Rck~qnsBzwTd-jckvWHrUjVj0Q__",
        },
        {
          id: 4,
          title: "Chic Charcoal",
          description: "A Sophisticated Look for the Modern Era.",
          info: "Welcome to the wonderful world of beige—where subtlety meets sass and neutral never means boring. Meet “Beige-Me Up, Buttercup,” a creamy complexion savior packaged in a warm, welcoming shade that’s guaranteed to make your routine feel as smooth as a spoonful of caramel mousse. Spread it on with glee, knowing you’re delivering a glow that whispers, “I’m effortless” while winking mischievously at the mirror. It’s time to embrace the hue that never tries too hard, because sometimes being gorgeously, gloriously beige is the most enchanting statement of all.",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/b8be/df1d/78873f68b224e62bcefb43f2d1d2d72f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=leROmd1RGAhOejFp8mf77JIjfOYRUMYzYIGeE0YUs0fL1pRbJv-4DtKEq8qWeGUm5yLBBf3kdCMijrerx8BRe7AvBn-MhKrADHUBsXn57hHwvLT5sxN7C7pvvdEdnoaCu9jf~TjI4638g0xy80gyQed2qcxk4c9s0zIH3xubRcelEbbolwrNyXOxWxNy~mFKWmci7IbWwVTNbjlO7MKHju5Eu0SPhzXxvOpOG0-PgH9B2r0YilfozDmOwnEb1IwqrZ7XmVN2a5Z-P1~G8ey8oFcLTr19hbPpjRZO4pCmTqe~rWyqhuP1vkLaCSG3Rck~qnsBzwTd-jckvWHrUjVj0Q__",
        },
        {
          id: 5,
          title: "Sunset Hues",
          description: "Capture The Colors Of The Evening Sky.",
          info: "Welcome to the wonderful world of beige—where subtlety meets sass and neutral never means boring. Meet “Beige-Me Up, Buttercup,” a creamy complexion savior packaged in a warm, welcoming shade that’s guaranteed to make your routine feel as smooth as a spoonful of caramel mousse. Spread it on with glee, knowing you’re delivering a glow that whispers, “I’m effortless” while winking mischievously at the mirror. It’s time to embrace the hue that never tries too hard, because sometimes being gorgeously, gloriously beige is the most enchanting statement of all.",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/b8be/df1d/78873f68b224e62bcefb43f2d1d2d72f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=leROmd1RGAhOejFp8mf77JIjfOYRUMYzYIGeE0YUs0fL1pRbJv-4DtKEq8qWeGUm5yLBBf3kdCMijrerx8BRe7AvBn-MhKrADHUBsXn57hHwvLT5sxN7C7pvvdEdnoaCu9jf~TjI4638g0xy80gyQed2qcxk4c9s0zIH3xubRcelEbbolwrNyXOxWxNy~mFKWmci7IbWwVTNbjlO7MKHju5Eu0SPhzXxvOpOG0-PgH9B2r0YilfozDmOwnEb1IwqrZ7XmVN2a5Z-P1~G8ey8oFcLTr19hbPpjRZO4pCmTqe~rWyqhuP1vkLaCSG3Rck~qnsBzwTd-jckvWHrUjVj0Q__",
        },
        {
          id: 6,
          title: "Mellow Yellow",
          description: "Brighten Your Day With A Splash of Yellow.",
          info: "Welcome to the wonderful world of beige—where subtlety meets sass and neutral never means boring. Meet “Beige-Me Up, Buttercup,” a creamy complexion savior packaged in a warm, welcoming shade that’s guaranteed to make your routine feel as smooth as a spoonful of caramel mousse. Spread it on with glee, knowing you’re delivering a glow that whispers, “I’m effortless” while winking mischievously at the mirror. It’s time to embrace the hue that never tries too hard, because sometimes being gorgeously, gloriously beige is the most enchanting statement of all.",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/b8be/df1d/78873f68b224e62bcefb43f2d1d2d72f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=leROmd1RGAhOejFp8mf77JIjfOYRUMYzYIGeE0YUs0fL1pRbJv-4DtKEq8qWeGUm5yLBBf3kdCMijrerx8BRe7AvBn-MhKrADHUBsXn57hHwvLT5sxN7C7pvvdEdnoaCu9jf~TjI4638g0xy80gyQed2qcxk4c9s0zIH3xubRcelEbbolwrNyXOxWxNy~mFKWmci7IbWwVTNbjlO7MKHju5Eu0SPhzXxvOpOG0-PgH9B2r0YilfozDmOwnEb1IwqrZ7XmVN2a5Z-P1~G8ey8oFcLTr19hbPpjRZO4pCmTqe~rWyqhuP1vkLaCSG3Rck~qnsBzwTd-jckvWHrUjVj0Q__",
        },
      ]);
    }, 1000);
  });
};

export const fetchProductDataWithNoDelay = (): Promise<ProductData[]> => {
  return new Promise((resolve) => {
    resolve([
      {
        id: 1,
        title: "Beige-Me Up, Buttercup!",
        description: "Your Daily Dollop of Dazzlingly Delightful Neutral Chic.",
        info: "Welcome to the wonderful world of beige—where subtlety meets sass and neutral never means boring. Meet “Beige-Me Up, Buttercup,” a creamy complexion savior packaged in a warm, welcoming shade that’s guaranteed to make your routine feel as smooth as a spoonful of caramel mousse. Spread it on with glee, knowing you’re delivering a glow that whispers, “I’m effortless” while winking mischievously at the mirror. It’s time to embrace the hue that never tries too hard, because sometimes being gorgeously, gloriously beige is the most enchanting statement of all.",
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/b8be/df1d/78873f68b224e62bcefb43f2d1d2d72f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=leROmd1RGAhOejFp8mf77JIjfOYRUMYzYIGeE0YUs0fL1pRbJv-4DtKEq8qWeGUm5yLBBf3kdCMijrerx8BRe7AvBn-MhKrADHUBsXn57hHwvLT5sxN7C7pvvdEdnoaCu9jf~TjI4638g0xy80gyQed2qcxk4c9s0zIH3xubRcelEbbolwrNyXOxWxNy~mFKWmci7IbWwVTNbjlO7MKHju5Eu0SPhzXxvOpOG0-PgH9B2r0YilfozDmOwnEb1IwqrZ7XmVN2a5Z-P1~G8ey8oFcLTr19hbPpjRZO4pCmTqe~rWyqhuP1vkLaCSG3Rck~qnsBzwTd-jckvWHrUjVj0Q__",
      },
      {
        id: 2,
        title: "Tropical Delight",
        description: "The Best Summer Vibes In A Can.",
        info: "Welcome to the wonderful world of beige—where subtlety meets sass and neutral never means boring. Meet “Beige-Me Up, Buttercup,” a creamy complexion savior packaged in a warm, welcoming shade that’s guaranteed to make your routine feel as smooth as a spoonful of caramel mousse. Spread it on with glee, knowing you’re delivering a glow that whispers, “I’m effortless” while winking mischievously at the mirror. It’s time to embrace the hue that never tries too hard, because sometimes being gorgeously, gloriously beige is the most enchanting statement of all.",
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/b8be/df1d/78873f68b224e62bcefb43f2d1d2d72f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=leROmd1RGAhOejFp8mf77JIjfOYRUMYzYIGeE0YUs0fL1pRbJv-4DtKEq8qWeGUm5yLBBf3kdCMijrerx8BRe7AvBn-MhKrADHUBsXn57hHwvLT5sxN7C7pvvdEdnoaCu9jf~TjI4638g0xy80gyQed2qcxk4c9s0zIH3xubRcelEbbolwrNyXOxWxNy~mFKWmci7IbWwVTNbjlO7MKHju5Eu0SPhzXxvOpOG0-PgH9B2r0YilfozDmOwnEb1IwqrZ7XmVN2a5Z-P1~G8ey8oFcLTr19hbPpjRZO4pCmTqe~rWyqhuP1vkLaCSG3Rck~qnsBzwTd-jckvWHrUjVj0Q__",
      },
      {
        id: 3,
        title: "Bold & Beautiful",
        description: "Statement Colors for Every Occasion.",
        info: "Welcome to the wonderful world of beige—where subtlety meets sass and neutral never means boring. Meet “Beige-Me Up, Buttercup,” a creamy complexion savior packaged in a warm, welcoming shade that’s guaranteed to make your routine feel as smooth as a spoonful of caramel mousse. Spread it on with glee, knowing you’re delivering a glow that whispers, “I’m effortless” while winking mischievously at the mirror. It’s time to embrace the hue that never tries too hard, because sometimes being gorgeously, gloriously beige is the most enchanting statement of all.",
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/b8be/df1d/78873f68b224e62bcefb43f2d1d2d72f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=leROmd1RGAhOejFp8mf77JIjfOYRUMYzYIGeE0YUs0fL1pRbJv-4DtKEq8qWeGUm5yLBBf3kdCMijrerx8BRe7AvBn-MhKrADHUBsXn57hHwvLT5sxN7C7pvvdEdnoaCu9jf~TjI4638g0xy80gyQed2qcxk4c9s0zIH3xubRcelEbbolwrNyXOxWxNy~mFKWmci7IbWwVTNbjlO7MKHju5Eu0SPhzXxvOpOG0-PgH9B2r0YilfozDmOwnEb1IwqrZ7XmVN2a5Z-P1~G8ey8oFcLTr19hbPpjRZO4pCmTqe~rWyqhuP1vkLaCSG3Rck~qnsBzwTd-jckvWHrUjVj0Q__",
      },
      {
        id: 4,
        title: "Chic Charcoal",
        description: "A Sophisticated Look for the Modern Era.",
        info: "Welcome to the wonderful world of beige—where subtlety meets sass and neutral never means boring. Meet “Beige-Me Up, Buttercup,” a creamy complexion savior packaged in a warm, welcoming shade that’s guaranteed to make your routine feel as smooth as a spoonful of caramel mousse. Spread it on with glee, knowing you’re delivering a glow that whispers, “I’m effortless” while winking mischievously at the mirror. It’s time to embrace the hue that never tries too hard, because sometimes being gorgeously, gloriously beige is the most enchanting statement of all.",
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/b8be/df1d/78873f68b224e62bcefb43f2d1d2d72f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=leROmd1RGAhOejFp8mf77JIjfOYRUMYzYIGeE0YUs0fL1pRbJv-4DtKEq8qWeGUm5yLBBf3kdCMijrerx8BRe7AvBn-MhKrADHUBsXn57hHwvLT5sxN7C7pvvdEdnoaCu9jf~TjI4638g0xy80gyQed2qcxk4c9s0zIH3xubRcelEbbolwrNyXOxWxNy~mFKWmci7IbWwVTNbjlO7MKHju5Eu0SPhzXxvOpOG0-PgH9B2r0YilfozDmOwnEb1IwqrZ7XmVN2a5Z-P1~G8ey8oFcLTr19hbPpjRZO4pCmTqe~rWyqhuP1vkLaCSG3Rck~qnsBzwTd-jckvWHrUjVj0Q__",
      },
      {
        id: 5,
        title: "Sunset Hues",
        description: "Capture The Colors Of The Evening Sky.",
        info: "Welcome to the wonderful world of beige—where subtlety meets sass and neutral never means boring. Meet “Beige-Me Up, Buttercup,” a creamy complexion savior packaged in a warm, welcoming shade that’s guaranteed to make your routine feel as smooth as a spoonful of caramel mousse. Spread it on with glee, knowing you’re delivering a glow that whispers, “I’m effortless” while winking mischievously at the mirror. It’s time to embrace the hue that never tries too hard, because sometimes being gorgeously, gloriously beige is the most enchanting statement of all.",
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/b8be/df1d/78873f68b224e62bcefb43f2d1d2d72f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=leROmd1RGAhOejFp8mf77JIjfOYRUMYzYIGeE0YUs0fL1pRbJv-4DtKEq8qWeGUm5yLBBf3kdCMijrerx8BRe7AvBn-MhKrADHUBsXn57hHwvLT5sxN7C7pvvdEdnoaCu9jf~TjI4638g0xy80gyQed2qcxk4c9s0zIH3xubRcelEbbolwrNyXOxWxNy~mFKWmci7IbWwVTNbjlO7MKHju5Eu0SPhzXxvOpOG0-PgH9B2r0YilfozDmOwnEb1IwqrZ7XmVN2a5Z-P1~G8ey8oFcLTr19hbPpjRZO4pCmTqe~rWyqhuP1vkLaCSG3Rck~qnsBzwTd-jckvWHrUjVj0Q__",
      },
      {
        id: 6,
        title: "Mellow Yellow",
        description: "Brighten Your Day With A Splash of Yellow.",
        info: "Welcome to the wonderful world of beige—where subtlety meets sass and neutral never means boring. Meet “Beige-Me Up, Buttercup,” a creamy complexion savior packaged in a warm, welcoming shade that’s guaranteed to make your routine feel as smooth as a spoonful of caramel mousse. Spread it on with glee, knowing you’re delivering a glow that whispers, “I’m effortless” while winking mischievously at the mirror. It’s time to embrace the hue that never tries too hard, because sometimes being gorgeously, gloriously beige is the most enchanting statement of all.",
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/b8be/df1d/78873f68b224e62bcefb43f2d1d2d72f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=leROmd1RGAhOejFp8mf77JIjfOYRUMYzYIGeE0YUs0fL1pRbJv-4DtKEq8qWeGUm5yLBBf3kdCMijrerx8BRe7AvBn-MhKrADHUBsXn57hHwvLT5sxN7C7pvvdEdnoaCu9jf~TjI4638g0xy80gyQed2qcxk4c9s0zIH3xubRcelEbbolwrNyXOxWxNy~mFKWmci7IbWwVTNbjlO7MKHju5Eu0SPhzXxvOpOG0-PgH9B2r0YilfozDmOwnEb1IwqrZ7XmVN2a5Z-P1~G8ey8oFcLTr19hbPpjRZO4pCmTqe~rWyqhuP1vkLaCSG3Rck~qnsBzwTd-jckvWHrUjVj0Q__",
      },
    ]);
  });
};
