variable "vpc-cidr" {
  default     = "10.0.0.0/16"
  description = "VPC CIDR Block"
  type        = string
}

variable "public-subnet-1-cidr" {
  default     = "10.0.0.0/24"
  description = "Public Subnet 1 CIDR Block"
  type        = string
}

variable "private-subnet-1-cidr" {
  default     = "10.0.1.0/24"
  description = "Private Subnet 1 CIDR Block"
  type        = string
}

variable "private-subnet-2-cidr" {
  default     = "10.0.2.0/24"
  description = "Private Subnet 2 CIDR Block"
  type        = string
}

variable "ssh-location" {
  default     = "0.0.0.0/0"
  description = "IP Address That Can SSH Into the EC2 Instance"
  type        = string
}

variable "bucket_prefix" {
  type        = string
  description = "Crea un nombre para el bucket"
  default     = "mys3bucketgrupo1"

}

variable "tags" {
  type        = map(any)
  description = "A mapping of tags assign to the bucket"
  default = {
    environment = "DEV"
    terraform   = "true"
  }

}
