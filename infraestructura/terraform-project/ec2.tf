#create ec2 instance in public subnet

resource "aws_instance" "web" {
  ami                         = "ami-0022f774911c1d690"
  instance_type               = "t2.micro"
  availability_zone           = "us-east-1a"
  associate_public_ip_address = true
  subnet_id                   = aws_subnet.public-subnet-1.id
  key_name                    = "kp-ec2g1"
  security_groups             = ["${aws_security_group.webserver-security-group.id}", "${aws_security_group.ssh-security-group.id}"]
  tags = {
    "Name" = "EC2 WebServer Group 1"
  }

}

// Configure the EC2 instance in a private subnet
resource "aws_instance" "ec2_private" {
  ami               = "ami-0022f774911c1d690"
  instance_type     = "t2.micro"
  availability_zone = "us-east-1a"
  subnet_id         = aws_subnet.public-subnet-1.id
  key_name          = "kp-ec2g1"
  security_groups   = ["${aws_security_group.webserver-security-group.id}", "${aws_security_group.ssh-security-group.id}"]
  tags = {
    "Name" = "EC2 Backend Group 1"
  }

}


