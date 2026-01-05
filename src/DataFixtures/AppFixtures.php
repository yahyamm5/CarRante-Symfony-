<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Product;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $product = new Product();
        $product->setName("phone");
        $product->setPrice(850);
        $product->setQuantity(350);
        $product->setDescription("good phone !");
    
        $manager->persist($product);

        $product = new Product();
        $product->setName("laptop");
        $product->setPrice(1200);
        $product->setQuantity(100);
        $product->setDescription("good laptop !");

        $manager->persist($product);

        $manager->flush();
    }
}
