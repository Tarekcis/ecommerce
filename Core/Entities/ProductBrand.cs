using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class ProductBrand  : BaseEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public  override int Id { get; set; }
        public string Name { get; set; }
    }
}