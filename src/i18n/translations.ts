export type Locale = 'en' | 'ja';

export const translations = {
    en: {
        meta: {
            lang: 'en',
            ogLocale: 'en_US',
        },
        home: {
            title: 'nullhodo',
            description: "nullhodo's personal portfolio website.",
            heading: 'nullhodo',
            aboutMeHeading: 'About me',
            aboutMeLines: [
                'Developer / Creator.',
                'I make generative art, interactive web applications,',
                'and various other things.',
            ],
            artworksHeading: 'Artworks',
            viewGallery: 'View Gallery',
            socialsHeading: 'Socials',
        },
        artworks: {
            title: 'Artworks | nullhodo',
            description: "nullhodo's artworks and generative sketches.",
            heading: 'Artworks',
            backToHome: 'Back to Home',
            searchOnX: 'Search all artworks on X',
            goldenRatioTitle: 'Golden Ratio Animation',
            goldenRatioDesc: [
                'A looping animation based on the golden spiral and golden rectangle, along with its generator.',
                'Created with p5.js.',
            ],
            badAppleTitle: 'Bad Apple on Console',
            badAppleDesc: [
                'A Bad Apple!! animation playable',
                'in the browser console.',
            ],
            coinTossTitle: 'Coin Toss',
            coinTossDesc: [
                'A coin toss simulation.',
                'Created with Three.js.',
            ],
            otherSketchesHeading: 'Other Sketches',
            otherSketchesDesc: 'All of these artworks are generated procedurally using code!',
            play: 'Play',
            github: 'GitHub',
            youtube: 'Watch on YouTube',
        },
        banner: {
            message: '日本語で表示',
            button: '日本語で表示',
            dismiss: '閉じる',
        },
    },
    ja: {
        meta: {
            lang: 'ja',
            ogLocale: 'ja_JP',
        },
        home: {
            title: 'nullhodo (なるほど)',
            description: 'nullhodo (なるほど) のポートフォリオWebサイト。',
            heading: 'nullhodo (なるほど)',
            aboutMeHeading: 'ひと',
            aboutMeLines: [
                'デベロッパー、クリエイター。',
                'ジェネラティブアート、インタラクティブなWebアプリケーションなど、',
                'さまざまなものを制作しています。',
            ],
            artworksHeading: 'さくひん',
            viewGallery: 'ギャラリーを見る',
            socialsHeading: 'つながる',
        },
        artworks: {
            title: 'さくひん | nullhodo (なるほど)',
            description: 'nullhodo (なるほど) の作品およびジェネラティブアートのスケッチ一覧。',
            heading: 'さくひん',
            backToHome: 'ホームに戻る',
            searchOnX: 'Xで全作品を検索',
            goldenRatioTitle: 'Golden Ratio Animation',
            goldenRatioDesc: [
                '黄金螺旋と黄金長方形をモチーフにしたループアニメーション、そしてそのジェネレーター。',
                'p5.jsで制作。',
            ],
            badAppleTitle: 'Bad Apple on Console',
            badAppleDesc: [
                'ブラウザの開発者コンソール上で動く',
                'Bad Apple!! アニメーション。',
            ],
            coinTossTitle: 'Coin Toss',
            coinTossDesc: [
                'コイントスの3Dシミュレーション。',
                'Three.jsで制作。',
            ],
            otherSketchesHeading: 'その他',
            otherSketchesDesc: 'すべてプログラムで作ったものです。',
            play: 'あそぶ',
            github: 'GitHub',
            youtube: 'YouTubeで見る',
        },
        banner: {
            message: '日本語版もあります',
            button: '日本語で表示',
            dismiss: '閉じる',
        },
    },
} as const;
