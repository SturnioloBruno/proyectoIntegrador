
resource "aws_s3_bucket" "grupo1bucket" {
  bucket_prefix = var.bucket_prefix
  tags          = var.tags
}

resource "aws_s3_bucket_acl" "grupo1c5bucket" {
  bucket = aws_s3_bucket.grupo1bucket.id
  acl    = "public-read"
}
