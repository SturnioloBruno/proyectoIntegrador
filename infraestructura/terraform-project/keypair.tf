module "keypair" {
  source  = "terraform-aws-modules/key-pair/aws"
  version = "1.0.1"

  key_name   = "kp-ec2g1"
  public_key = file("${path.module}/mykeyg1.pub")
}