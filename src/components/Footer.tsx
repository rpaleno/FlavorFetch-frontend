const Footer = () => {
    return (
        <div className="py-10" style={{ backgroundColor: 'var(--custom-color)'}}>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <span className="text-3xl text-white font-bold tracking-tight">
                    FlavorFetch
                </span>
                <span className="text-white font-bold tracking-tight flex gap-4">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </span>
            </div>
        </div>
    )
}

export default Footer;