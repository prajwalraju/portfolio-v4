
function CompanyElement({companyName, selected=false}) {
  console.log("companyName", companyName)
  return (
    <a>{companyName}</a>
  )
}

export default CompanyElement