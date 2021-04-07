import { PackageManagerConfig } from './'

export default function generateDefaultPackageManagers(
  productName: string
): PackageManagerConfig[] {
  return [
    {
      label: 'Homebrew',
      commands: [
        `brew tap hashicorp/tap`,
        `brew install hashicorp/tap/${productName}`,
      ],
      os: 'darwin',
    },
    {
      label: 'Ubuntu/Debian',
      commands: [
        `curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -`,
        `sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"`,
        `sudo apt-get update && sudo apt-get install ${productName}`,
      ],
      os: 'linux',
    },
    {
      label: 'CentOS/RHEL',
      commands: [
        `sudo yum install -y yum-utils`,
        `sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo`,
        `sudo yum -y install ${productName}`,
      ],
      os: 'linux',
    },
    {
      label: 'Fedora',
      commands: [
        `sudo dnf install -y dnf-plugins-core`,
        `sudo dnf config-manager --add-repo https://rpm.releases.hashicorp.com/fedora/hashicorp.repo`,
        `sudo dnf -y install ${productName}`,
      ],
      os: 'linux',
    },
    {
      label: 'Amazon Linux',
      commands: [
        `sudo yum install -y yum-utils`,
        `sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/AmazonLinux/hashicorp.repo`,
        `sudo yum -y install ${productName}`,
      ],
      os: 'linux',
    },
    {
      label: 'Homebrew',
      commands: [
        `brew tap hashicorp/tap`,
        `brew install hashicorp/tap/${productName}`,
      ],
      os: 'linux',
    },
  ]
}