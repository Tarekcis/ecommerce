using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class Product : BaseEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public override int Id { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string PictureUrl { get; set; }
        [ForeignKey("ProductTypeId")]
        public ProductType ProductType { get; set; }
        public int ProductTypeId { get; set; }
        [ForeignKey("ProductBrandId")]
        public ProductBrand ProductBrand { get; set; }

        public int ProductBrandId { get; set; }
    }
}