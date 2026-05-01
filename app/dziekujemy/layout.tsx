export default function DziekujemyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `fbq('track','CompleteRegistration');`,
          }}
        />
      </head>
      {children}
    </>
  )
}
