import Image from 'next/image'
import Link from 'next/link'
const Logo = () => {
	return (
		<Link href='/'>
			<Image
				src='/logo.svg'
				alt='Logo'
				width={48}
				height={48}
				priority
			/>
		</Link>
	)
}

export default Logo
