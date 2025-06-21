import Container from '@/components/container'

function Footer() {
  const now = new Date()
  return (
    <footer className="bg-black py-7 text-white">
      <Container className="text-center">
        Copyright &copy; {now.getFullYear()},{' '}
        <a
          href="https://farisperwira.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Faris Perwira Haqi
        </a>
        . All Rights Reserved
      </Container>
    </footer>
  )
}

export default Footer
