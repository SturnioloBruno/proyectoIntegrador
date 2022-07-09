#create RDS MySQL DB

#resource "aws_db_instance" "MySQLDB" {
#
#  identifier           = "mysql-database-group1"
#  engine               = "mysql"
#  engine_version       = "8.0"
#  instance_class       = "db.t2.micro"
#  allocated_storage    = 20
#
#  db_name = "proyectoIntegrador"
#  username             = "grupo1"
#  password             = "grupo1admin"
#  parameter_group_name = "default.mysql8.0"
#  skip_final_snapshot  = true
#  port                 = 3306
#  publicly_accessible  = true
#  tags = {
#    "Name" = "Group 1 RDS"
#  }
#}
module "db" {
  source  = "terraform-aws-modules/rds/aws"

  identifier = "database-mysql-group1"

  engine            = "mysql"
  engine_version    = "8.0"
  instance_class    = "db.t2.small"
  allocated_storage = 20

  db_name = "proyectoIntegrador"
  username = "grupo1"
  password = "grupo1admin"
  #parameter_group_name = "default.mysql8.0"
  port     = "3306"

  create_db_subnet_group = true
  #subnet_ids             = [module.vpc.database_subnets[0], module.vpc.database_subnets[1]]
  subnet_ids = [aws_subnet.private-subnet-1.id, aws_subnet.private-subnet-2.id]
 
  #db_subnet_group_name = module.vpc.database_subnet_group_name
  
  # DB parameter group
   family = "mysql8.0"

  # DB option group
   major_engine_version = "8.0"

  publicly_accessible = true

  vpc_security_group_ids = [ aws_security_group.database-security-group.id ]

}

