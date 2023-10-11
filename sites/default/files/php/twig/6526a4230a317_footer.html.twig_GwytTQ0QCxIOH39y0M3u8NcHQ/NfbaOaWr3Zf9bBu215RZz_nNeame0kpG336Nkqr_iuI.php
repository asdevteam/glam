<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* @oshop/footer.html.twig */
class __TwigTemplate_8115de6f244065d08611550d917e1bf2 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<footer class=\"footer dark-bg\">
    <div class=\"primary-footer\">
        <div class=\"container\">
            <div class=\"row\">
                ";
        // line 5
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer", [], "any", false, false, true, 5), 5, $this->source), "html", null, true);
        echo "

            </div>
            ";
        // line 8
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "logo_client", [], "any", false, false, true, 8), 8, $this->source), "html", null, true);
        echo "
            
        </div>
    </div>
    <div class=\"secondary-footer text-center\">
        <div class=\"container\">
            <div class=\"copyright\">
            
                    ";
        // line 16
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "copyrights", [], "any", false, false, true, 16), 16, $this->source), "html", null, true);
        echo "
              
            </div>
        </div>
    </div>
</footer>
<div class=\"color-customizer closed\">
    <div class=\"color-button\">
        <a class=\"opener\" href=\"#\"> <i class=\"fas fa-spinner fa-spin\"></i>
        </a>
    </div>
    <div class=\"clearfix color-chooser text-center\">
        ";
        // line 28
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["color_header"] ?? null), 28, $this->source));
        echo "
        <ul class=\"colorChange clearfix\">
            <li class=\"theme-default selected\" title=\"theme-default\" data-style=\"theme-default\"></li>
            <li class=\"theme-mediumseagreen\" title=\"theme-mediumseagreen\" data-style=\"theme-mediumseagreen\"></li>
            <li class=\"theme-orange\" title=\"theme-orange\" data-style=\"theme-orange\"></li>
            <li class=\"theme-blue\" title=\"theme-blue\" data-style=\"theme-blue\"></li>
            <li class=\"theme-yellow\" title=\"theme-yellow\" data-style=\"theme-yellow\"></li>
        </ul>
        <div class=\"text-center mt-4\">";
        // line 36
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["color_footer"] ?? null), 36, $this->source));
        echo "
        </div>
    </div>
</div>

<!--color-customizer end-->

<!--back-to-top start-->

<div id=\"scroll-top\"><a class=\"top arrow\" href=\"#top\"><i class=\"fas fa-angle-double-up\"></i></a></div>";
    }

    public function getTemplateName()
    {
        return "@oshop/footer.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  88 => 36,  77 => 28,  62 => 16,  51 => 8,  45 => 5,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<footer class=\"footer dark-bg\">
    <div class=\"primary-footer\">
        <div class=\"container\">
            <div class=\"row\">
                {{ page.footer}}

            </div>
            {{ page.logo_client }}
            
        </div>
    </div>
    <div class=\"secondary-footer text-center\">
        <div class=\"container\">
            <div class=\"copyright\">
            
                    {{ page.copyrights }}
              
            </div>
        </div>
    </div>
</footer>
<div class=\"color-customizer closed\">
    <div class=\"color-button\">
        <a class=\"opener\" href=\"#\"> <i class=\"fas fa-spinner fa-spin\"></i>
        </a>
    </div>
    <div class=\"clearfix color-chooser text-center\">
        {{ color_header|raw }}
        <ul class=\"colorChange clearfix\">
            <li class=\"theme-default selected\" title=\"theme-default\" data-style=\"theme-default\"></li>
            <li class=\"theme-mediumseagreen\" title=\"theme-mediumseagreen\" data-style=\"theme-mediumseagreen\"></li>
            <li class=\"theme-orange\" title=\"theme-orange\" data-style=\"theme-orange\"></li>
            <li class=\"theme-blue\" title=\"theme-blue\" data-style=\"theme-blue\"></li>
            <li class=\"theme-yellow\" title=\"theme-yellow\" data-style=\"theme-yellow\"></li>
        </ul>
        <div class=\"text-center mt-4\">{{ color_footer|raw }}
        </div>
    </div>
</div>

<!--color-customizer end-->

<!--back-to-top start-->

<div id=\"scroll-top\"><a class=\"top arrow\" href=\"#top\"><i class=\"fas fa-angle-double-up\"></i></a></div>", "@oshop/footer.html.twig", "/var/www/html/themes/oshop/templates/footer.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array("escape" => 5, "raw" => 28);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape', 'raw'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
