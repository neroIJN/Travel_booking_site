import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: 'res.cloudinary.com', protocol: 'https', port: '' }
        ]
    },
    webpack: (config, { isServer }) => {
        // Keep existing topLevelAwait configuration
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        }

        // Add debugging options
        config.optimization.minimize = false
        config.optimization.minimizer = []

        // Handle browser-specific fallbacks
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
            }
        }

        return config
    },
    // Add output configuration for better error handling
    output: 'standalone',
}

export default withPlaiceholder(nextConfig)