import React from "react";


const Usage = () => {
    return (
        <div className="relative mx-auto grid max-w-screen-lg grid-cols-1 gap-8 px-8 py-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* First Video Block */}
            <div className="col-span-1">
                <h2 className="text-3xl">Create Studio Quality Deepfakes</h2>
                <div className="mt-8 text-base text-neutral-50">
                    Be whoever you want to be with our advanced deepfake technology. Create studio quality face swaps with just a few clicks using our intuitive online face swap app.
                </div>
                <a
                    className="block cursor-pointer rounded-full px-4 py-2 text-neutral-50 bg-[#3C1DFF] hover:bg-[#3C1DFF]/90 disabled:bg-slate-800 mt-8 w-fit"
                    href="/create"
                >
                    Create a Face Swap Video for Free
                </a>
                <div className="mt-8 block aspect-video w-full">
                    <video
                        autoPlay
                        loop
                        playsInline
                        className="block max-h-64 rounded-md object-cover w-full"
                        poster="https://d28dkohlqf5vwj.cloudfront.net/products/faceswap-realistic-video.png"
                        muted
                    >
                        <source src="https://d28dkohlqf5vwj.cloudfront.net/products/faceswap-realistic-video-compressed.mp4" type="video/mp4" />
                        <source src="https://d28dkohlqf5vwj.cloudfront.net/products/faceswap-realistic-video.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>

            {/* Second Video Block */}
            <div className="col-span-1">
                <h2 className="text-3xl">Create Studio Quality Deepfakes</h2>
                <div className="mt-8 text-base text-neutral-50">
                    Be whoever you want to be with our advanced deepfake technology. Create studio quality face swaps with just a few clicks using our intuitive online face swap app.
                </div>
                <a
                    className="block cursor-pointer rounded-full px-4 py-2 text-neutral-50 bg-[#3C1DFF] hover:bg-[#3C1DFF]/90 disabled:bg-slate-800 mt-8 w-fit"
                    href="/create"
                >
                    Create a Face Swap Video for Free
                </a>
                <div className="mt-8 block aspect-video w-full">
                    <video
                        autoPlay
                        loop
                        playsInline
                        className="block max-h-64 rounded-md object-cover w-full"
                        poster="https://d28dkohlqf5vwj.cloudfront.net/products/faceswap-realistic-video.png"
                        muted
                    >
                        <source src="https://d28dkohlqf5vwj.cloudfront.net/products/faceswap-realistic-video-compressed.mp4" type="video/mp4" />
                        <source src="https://d28dkohlqf5vwj.cloudfront.net/products/faceswap-realistic-video.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>

            {/* Photo Block */}
            <div className="col-span-1">
                <h2 className="text-3xl">Create Studio Quality Deepfakes</h2>
                <div className="mt-8 text-base text-neutral-50">
                    Be whoever you want to be with our advanced deepfake technology. Create studio quality face swaps with just a few clicks using our intuitive online face swap app.
                </div>
                <a
                    className="block cursor-pointer rounded-full px-4 py-2 text-neutral-50 bg-[#3C1DFF] hover:bg-[#3C1DFF]/90 disabled:bg-slate-800 mt-8 w-fit"
                    href="/create"
                >
                    Create a Face Swap Video for Free
                </a>
                <div className="mt-8 block aspect-video w-full">
                    <img
                        src="https://d28dkohlqf5vwj.cloudfront.net/products/faceswap-realistic-video.png"
                        alt="Deepfake Example"
                        className="block max-h-64 rounded-md object-cover w-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default Usage;